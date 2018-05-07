export interface Lecture {
  lecture_id: string;
  lecture_slug: string;
  title: string;
  description: string;
  is_free: boolean;
  updated_at: Date;
  position: number;
  created_at: Date;
}
