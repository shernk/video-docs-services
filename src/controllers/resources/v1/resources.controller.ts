import { Request, Response } from "express";
import { Book } from "../../../models/book/book.interface";
import { Course } from "../../../models/course/course.interface";
import { BOOKS } from "./../../../models/data-sets/book.data";
import { COURSES } from "./../../../models/data-sets/course.data";

export class ResourcesController {
  public getResourcesById(
    req: Request,
    res: Response
  ): { books: Book[]; courses: Course[] } {
    const simpleId = req.params.toString();
    const books = this.getBooks(simpleId);
    const courses = this.getCourse(simpleId);

    res.send({ books, courses });
    return { books, courses };
  }

  private getBooks(simpleId: string): Book[] {
    return BOOKS[simpleId];
  }

  private getCourse(simpleId: string): Course[] {
    return COURSES[simpleId];
  }
}
