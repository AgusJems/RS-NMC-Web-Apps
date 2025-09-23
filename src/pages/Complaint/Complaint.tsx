import ComplaintTable from "../../components/admin-page/complaint/complaintTable";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Complaint() {
  return (
    <div>
      <PageMeta
        title="Complaint | RS NMC"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Complaint Page" />
      <div className="space-y-6">
        <ComponentCard title="Complaint Table">
          <ComplaintTable />
        </ComponentCard>
      </div>
    </div>
  );
}
