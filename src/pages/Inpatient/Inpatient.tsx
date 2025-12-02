import InpatientTable from "../../components/admin-page/inpatient/inpatientTable";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Inpatient() {
  return (
    <div>
      <PageMeta
        title="RS NMC Web Apps"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Inpatient Page" />
      <div className="space-y-6">
        <ComponentCard title="Inpatient Table">
          <InpatientTable />
        </ComponentCard>
      </div>
    </div>
  );
}
