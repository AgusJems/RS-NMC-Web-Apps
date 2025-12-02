import TestimonialTable from "../../components/admin-page/testimonial/testimonialTable";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Testimonial() {
  return (
    <div>
      <PageMeta
        title="RS NMC Web Apps"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Testimonial Page" />
      <div className="space-y-6">
        <ComponentCard title="Testimonial Table">
          <TestimonialTable />
        </ComponentCard>
      </div>
    </div>
  );
}
