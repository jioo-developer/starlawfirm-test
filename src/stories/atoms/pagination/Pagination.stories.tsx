import Pagination from "./Pagination";
import "@/app/globals.css";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    page: {
      control: { type: "number" },
      description: "Current active page",
    },
    handler: {
      action: "pageChanged",
      description: "Function to handle page changes",
    },
  },
};

export default meta;

export const Default = {
  args: {
    page: 1,
    handler: (page: number) => {
      console.log(`Page changed to: ${page}`);
    },
  },
};
