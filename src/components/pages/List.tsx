import Layout from "../templates/Layout";
import CategoriesList from "../organisms/CategoriesList";
import { categories } from "../../constants/lists";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import LinkCard from "../templates/LinkCard";
import { mockProjects } from "../../constants/mocks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setSearchValue } from "../../features/search";
import { Link } from "react-router-dom";

const Component = () => {
  const search = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  // filter projects
  const filteredProjects = mockProjects.filter((project) => {
    if (search.startsWith("tag:")) {
      const tag = search.split(":")[1];
      return project.tags.includes(tag);
    }
    return project.name.includes(search) || project.ip.includes(search);
  });

  return (
    <Layout>
      <div className="p-0 md:p-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 px-2 md:p-0">
          <div className="hidden md:block md:col-span-2">
            <CategoriesList list={categories} />
          </div>
          <div className="col-span-12 md:col-span-10 mb-12">
            <div className="flex justify-between items-center gap-4 py-2">
              {/* search */}
              <Input
                placeholder={"Search"}
                text={search}
                onChange={handleSearch}
              />
              <Link to={"/new"}>
                <div className="hidden md:block">
                  <Button text={"New Project"} onClick={() => {}} />
                </div>
                <div className="md:hidden">
                  <Button text={"New"} onClick={() => {}} />
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
              {/* list */}
              {filteredProjects.map(({ id, name, status, ip, tags, uuid }) => (
                <div className="col-span-1 h-44" key={id}>
                  <LinkCard to={`/project/${uuid}`}>
                    <div className="flex flex-col h-full">
                      <div className="flex flex-col flex-grow w-full">
                        <p className="text-start text-Elements-Headline">
                          {name}
                        </p>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="flex space-x-2 items-center">
                          {status ? (
                            <div className="w-3 h-3 min-w-3 rounded-full bg-green-500" />
                          ) : (
                            <div className="w-3 h-3 min-w-3 rounded-full bg-red-500" />
                          )}
                          <p className="text-Elements-Body">{ip}</p>
                        </div>
                        {/* tag */}
                        <div className="text-sm flex space-x-2 items-center">
                          {tags.map((tag, index) => (
                            <p key={index} className="text-Elements-Body">
                              {tag}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </LinkCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Component;
