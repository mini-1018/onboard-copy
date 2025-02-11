export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  user: {
    id: number;
    name: string;
    image: string;
  };
  replies?: Comment[];
}

export interface CreateComment {
  content: string;
  postId: number;
  parentId?: number;
  userId: number;
}

export interface UpdateComment {
  content: string;
}
