import React from "react";
import * as D from "./index";

export interface ToDoItem {
  id: string;
  name: string;
  isCompleted: boolean;
}

export type ToDoList = ToDoItem[];

export type SetItems = React.Dispatch<React.SetStateAction<D.ToDoList>>;

export type HandleCheck = (id: D.ToDoItem["id"], value: boolean) => void;

export type HandleDelete = (id: D.ToDoItem["id"]) => void;

export type HandleEdit = (id: D.ToDoItem["id"], value: string) => void;
