export interface TaskInterface{
    taskName: string,
    taskNotes: string,
    taskStatus: string,
  }

  export interface CategoryInterface{
    userId: String
  catName: String,
  colortheme: String,
  icon: String,
  tasks: [TaskInterface]
  }