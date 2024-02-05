import Layout from "../templates/Layout";

const Component = () => {
  return (
    <Layout>
      <div className="p-0 md:p-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 px-2 md:p-0">
          <div className="hidden md:block md:col-span-3 lg:col-span-2">
            {/* <NavigationMenu /> */}
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-7 mb-12">
            {/* <BlogList
              length={data[0].pages.length}
              limit={data[0].limit}
              totalCount={data[0].totalCount}
              size={size}
              setSize={setSize}
              pages={pages}
            /> */}
          </div>

          <div className="hidden lg:col-span-3 lg:block">
            {/* <Welcome />
            <RelatedLinks /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Component;