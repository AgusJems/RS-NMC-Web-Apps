import PolyTable from "../../components/admin-page/poly/polyTable";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Poly() {
  return (
    <div>
      <PageMeta
        title="News | RS NMC"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="News Page" />
      <div className="space-y-6">
        <ComponentCard title="Poly Table">
          <PolyTable />
        </ComponentCard>
      </div>
    </div>
  );
}
