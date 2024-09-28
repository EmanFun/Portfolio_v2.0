import { model, models, Schema } from "mongoose";

export interface IProject {
  title: string;
  rol: string;
  link: string;
  description: string;
  year: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: String,
    rol: String,
    link: String,
    description: String,
    year: String,
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
      },
    },
  }
);

const Project = models.Project || model("Project", ProjectSchema);
export default Project;
