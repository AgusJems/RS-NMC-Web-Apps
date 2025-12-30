import IndicatorTable from "../../components/admin-page/indicator/indicatorTable";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Indicator() {
  return (
    <div>
      <PageMeta
        title="RS NMC Web Apps"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Indicator Page" />
      <div className="space-y-6">
        <ComponentCard title="Indicator Table">
          <IndicatorTable />
        </ComponentCard>
      </div>
    </div>
  );
}
