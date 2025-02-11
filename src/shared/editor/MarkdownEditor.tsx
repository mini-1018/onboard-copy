"use client";
import React, { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/navigation";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaLink,
  FaCode,
  FaQuoteLeft,
  FaImage,
} from "react-icons/fa";
import { uploadImage } from "../../entities/image/uploadImage";
import { PostData } from "../types";
import { toast } from "react-toastify";
import Button from "../components/buttons/Button";

interface MarkdownEditorProps {
  initialPost?: PostData | null;
  onSubmit: (postData: PostData) => void;
  buttonText: string;
}

export default function MarkdownEditor({
  initialPost,
  onSubmit,
  buttonText,
}: MarkdownEditorProps) {
  const [postData, setPostData] = useState<PostData>({
    id: initialPost?.id || undefined,
    title: initialPost?.title || "",
    content: initialPost?.content || "",
    tags: initialPost?.tags || [],
  });

  const [tagInput, setTagInput] = useState<string>("");

  const router = useRouter();

  // 마크다운 문법 글
  const toggleMarkdown = (syntax: string, placeholder?: string) => {
    const textArea = document.querySelector("textarea");
    if (!textArea) return;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const text = postData.content;
    const before = text.substring(0, start);
    const selection = text.substring(start, end);
    const after = text.substring(end);

    // 선택된 텍스트가 있는 경우
    if (selection) {
      const syntaxLength = syntax.length;

      // 선택된 텍스트가 해당 마크다운으로 감싸져 있는지 확인
      const hasMarkdown =
        (selection.startsWith(syntax) && selection.endsWith(syntax)) ||
        (before.endsWith(syntax) && after.startsWith(syntax));

      let newText = "";
      if (hasMarkdown) {
        // 마크다운 제거
        if (selection.startsWith(syntax) && selection.endsWith(syntax)) {
          // 선택된 텍스트 내부에 마크다운이 있는 경우
          newText = `${before}${selection.slice(
            syntaxLength,
            -syntaxLength
          )}${after}`;
        } else {
          // 선택된 텍스트 외부에 마크다운이 있는 경우
          newText = `${before.slice(0, -syntaxLength)}${selection}${after.slice(
            syntaxLength
          )}`;
        }
      } else {
        // 마크다운 추가
        newText = `${before}${syntax}${selection}${syntax}${after}`;
      }
      setPostData({ ...postData, content: newText });

      // 커서 위치 복원
      setTimeout(() => {
        textArea.selectionStart = start;
        textArea.selectionEnd = end;
        textArea.focus();
      }, 0);
    } else {
      // 선택된 텍스트가 없는 경우
      const newText = `${before}${syntax}${placeholder || ""}${syntax}${after}`;
      setPostData({ ...postData, content: newText });

      // 커서 위치 설정
      const newCursorPos = start + syntax.length;
      setTimeout(() => {
        textArea.selectionStart = newCursorPos;
        textArea.selectionEnd = newCursorPos;
        textArea.focus();
      }, 0);
    }
  };

  // 클립보드 붙여넣기 처리
  const handlePaste = useCallback(
    async (e: React.ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const file = items[i].getAsFile();

          if (file) {
            e.preventDefault(); // 기본 붙여넣기 동작 방지
            const textArea = e.target as HTMLTextAreaElement;
            const cursorPosition = textArea.selectionStart;
            const content = postData.content;

            try {
              const response = await uploadImage(file);

              const newContent =
                content.slice(0, cursorPosition) +
                `![](${response})` +
                content.slice(cursorPosition);

              setPostData({ ...postData, content: newContent });

              // 커서 위치 복원
              setTimeout(() => {
                textArea.selectionStart =
                  cursorPosition + `![](${response.url})`.length;
                textArea.selectionEnd =
                  cursorPosition + `![](${response.url})`.length;
                textArea.focus();
              }, 0);
            } catch (_error) {
              toast.error("이미지 업로드에 실패했습니다.");
            }
            return;
          }
        }
      }
    },
    [postData]
  );

  // 파일 입력 처리
  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const response = await uploadImage(file);
        const textArea = document.querySelector("textarea");
        if (!textArea) return;

        const cursorPosition = textArea.selectionStart;
        const content = postData.content;
        const newContent =
          content.slice(0, cursorPosition) +
          `![](${response.url})` +
          content.slice(cursorPosition);

        setPostData({ ...postData, content: newContent });

        // 커서 위치 복원
        setTimeout(() => {
          textArea.selectionStart =
            cursorPosition + `![](${response.url})`.length;
          textArea.selectionEnd =
            cursorPosition + `![](${response.url})`.length;
          textArea.focus();
        }, 0);
      } catch (error) {
        toast.error("이미지 업로드에 실패했습니다.");
      }
    }
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!postData.tags?.includes(tagInput.trim())) {
        setPostData({
          ...postData,
          tags: [...(postData.tags || []), tagInput.trim()],
        });
      }
      setTagInput("");
    }
  };

  const removeTag = (indexToRemove: number) => {
    setPostData({
      ...postData,
      tags: postData.tags?.filter((_, index) => index !== indexToRemove),
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 제목 입력 */}
      <input
        type="text"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        placeholder="제목을 입력하세요"
        className="w-full text-3xl font-bold p-4 mb-4 focus:outline-none"
      />

      {/* 구분선 */}
      <div className="border-b border-gray-200 mb-4" />

      {/* 툴바 */}
      <div className="flex items-center gap-2 p-2">
        <button
          onClick={() => toggleMarkdown("**", "굵은 텍스트")}
          className="p-3 hover:bg-yellow rounded text-lg"
          title="굵게"
        >
          <FaBold size={20} />
        </button>
        <button
          onClick={() => toggleMarkdown("*", "기울임 텍스트")}
          className="p-3 hover:bg-yellow rounded text-lg"
          title="기울임"
        >
          <FaItalic size={20} />
        </button>
        <button
          onClick={() => toggleMarkdown("~~", "취소선 텍스트")}
          className="p-3 hover:bg-yellow rounded text-lg"
          title="취소선"
        >
          <FaStrikethrough size={20} />
        </button>
        <div className="h-6 w-px bg-primary mx-2" />
        <button
          onClick={() => toggleMarkdown("[", "](링크 URL)")}
          className="p-3 hover:bg-yellow rounded text-lg"
          title="링크"
        >
          <FaLink size={20} />
        </button>
        <button
          onClick={() => toggleMarkdown("```\n", "\n```")}
          className="p-3 hover:bg-yellow rounded text-lg"
          title="코드 블록"
        >
          <FaCode size={20} />
        </button>
        <button
          onClick={() => toggleMarkdown("> ", "인용구")}
          className="p-3 hover:bg-yellow rounded text-lg"
          title="인용"
        >
          <FaQuoteLeft size={20} />
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
          id="imageInput"
        />
        <button
          onClick={() => document.getElementById("imageInput")?.click()}
          className="p-3 hover:bg-gray-100 rounded text-lg"
          title="이미지"
        >
          <FaImage size={20} />
        </button>
      </div>

      {/* 에디터와 미리보기 */}
      <div className="flex">
        {/* 마크다운 에디터 */}
        <div className="w-1/2 border-r border-gray">
          <textarea
            value={postData.content}
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
            onPaste={handlePaste}
            placeholder="마크다운 형식으로 작성해보세요..."
            className="w-full h-[600px] p-4 focus:outline-none resize-none"
          />
        </div>

        {/* 미리보기 */}
        <div className="w-1/2 h-[600px] p-4 overflow-auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose max-w-none"
          >
            {postData.content}
          </ReactMarkdown>
        </div>
      </div>

      {/* 태그 입력 섹션 */}
      <div className="mt-6 mb-4">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {postData.tags?.map((tag, index) => (
            <div
              key={index}
              className="group flex items-center gap-1 px-2 py-0.5 bg-gray-100 hover:bg-yellow rounded-md text-sm text-primary transition-colors"
            >
              <span className="text-[13px]">{tag}</span>
              <button
                onClick={() => removeTag(index)}
                className=" text-primary"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagInputKeyDown}
            placeholder={"태그를 입력하세요(5개 제한)"}
            className="flex-grow min-w-[120px] px-1 py-0.5 text-sm bg-transparent focus:outline-none"
          />
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="flex justify-end gap-2 mt-4">
        <Button onClick={() => router.back()} variant="yellow">
          취소
        </Button>
        <Button onClick={() => onSubmit(postData)} variant="primary">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
