import EmergencyTable from "../../components/admin-page/emergency/emergencyTable";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Emergency() {
  return (
    <div>
      <PageMeta
        title="RS NMC Web Apps"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Emergency Page" />
      <div className="space-y-6">
        <ComponentCard title="Emergency Table">
          <EmergencyTable />
        </ComponentCard>
      </div>
    </div>
  );
}
