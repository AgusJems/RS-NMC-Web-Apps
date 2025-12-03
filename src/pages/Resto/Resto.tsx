import RestoTable from "../../components/admin-page/resto/restoTable";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function News() {
  return (
    <div>
      <PageMeta
        title="Resto | RS NMC"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Resto Page" />
      <div className="space-y-6">
        <ComponentCard title="Resto Table">
          <RestoTable />
        </ComponentCard>
      </div>
    </div>
  );
}
