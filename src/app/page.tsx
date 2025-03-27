import SimpleForm from "@/components/FormComponent";
import ItemView from "@/components/ItemView";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SimpleForm />
      <ItemView />
    </div>
  );
}
