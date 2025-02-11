import { Session } from "next-auth";
export interface SessionProps {
  initialSession: Session | null;
}
