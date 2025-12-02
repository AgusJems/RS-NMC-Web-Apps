import SupportTable from "../../components/admin-page/support/supportTable";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Support() {
  return (
    <div>
      <PageMeta
        title="RS NMC Web Apps"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Support Page" />
      <div className="space-y-6">
        <ComponentCard title="Support Table">
          <SupportTable />
        </ComponentCard>
      </div>
    </div>
  );
}
