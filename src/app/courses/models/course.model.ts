import { Category } from './category.model';
import { Lecture } from './lecture.model';

export interface Course {
  course_id: string;
  course_slug: string;
  title: string;
  description: string;
  is_paid: boolean;
  price: number;
  objective: string;
  certification: string;
  target_audience: string;
  workload: number;
  time_available: number;
  topics: object[];
  lectures: Lecture[];
  category: Category;
  logo_url: string;
}
