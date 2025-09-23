import DoctorTable from "../../components/admin-page/doctor/doctorTable";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Doctor() {
  return (
    <div>
      <PageMeta
        title="Doctor | RS NMC"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Doctor Page" />
      <div className="space-y-6">
        <ComponentCard title="Doctor Table">
          <DoctorTable />
        </ComponentCard>
      </div>
    </div>
  );
}
