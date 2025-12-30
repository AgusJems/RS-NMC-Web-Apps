import StoryTable from "../../components/admin-page/story/storyTable";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Story() {
  return (
    <div>
      <PageMeta
        title="RS NMC Web Apps"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Story Page" />
      <div className="space-y-6">
        <ComponentCard title="Story Table">
          <StoryTable />
        </ComponentCard>
      </div>
    </div>
  );
}
