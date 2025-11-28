import CarouselTable from "../../components/admin-page/carousel/carouselTable";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Carousel() {
  return (
    <div>
      <PageMeta
        title="Carousel | RS NMC"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Carousel Page" />
      <div className="space-y-6">
        <ComponentCard title="Carousel Table">
          <CarouselTable />
        </ComponentCard>
      </div>
    </div>
  );
}
