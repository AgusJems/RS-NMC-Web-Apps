import PartnerTable from "../../components/admin-page/partner/partnerTable";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Poly() {
  return (
    <div>
      <PageMeta
        title="Partner | RS NMC"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Partner Page" />
      <div className="space-y-6">
        <ComponentCard title="Partner Table">
          <PartnerTable />
        </ComponentCard>
      </div>
    </div>
  );
}
