import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationTopBar from "../components/NavigationTopBar";
import { pdf } from "../assets/images";
import { HiOutlineClock } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getReports } from "../store/report/reportAction";
import Pagination from "../components/table/Pagination";
import Loader from "../components/Loader";

const Reports = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { reports } = useAppSelector((state) => state.reportSlices);
  const { isLoading } = useAppSelector((state) => state.commonSlice);

  useEffect(() => {
    const data = { page: 1, perPage: 20 };
    dispatch(getReports(data));
  }, [dispatch]);

  return (
    <div>
      <NavigationTopBar name="Reports" onClick={() => navigate(-1)} />
      {isLoading ? (
        <Loader isBlue={true} padding={10} />
      ) : (
        <div className="py-6 grid xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 pt-4 lg:pt-8">
          {reports?.result?.map(
            ({
              _id,
              name,
              age,
              picture,
              reports = [],
            }: {
              _id: string;
              name: string;
              age: string;
              picture: string;
              reports: [];
            }) => (
              <div
                key={_id}
                className=" bg-white rounded-xl shadow p-4 font-sans"
              >
                {/* Profile Section */}
                <div className="flex items-center space-x-4">
                  <img
                    src={picture}
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {name}
                    </h2>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <HiOutlineClock /> {age}
                    </p>
                  </div>
                </div>
                {/* pdfs */}
                {reports?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {reports?.map(({ reportPdfUrl }) => (
                      <img
                        key={reportPdfUrl}
                        src={pdf}
                        onClick={() => {
                          if (reportPdfUrl) {
                            window.open(reportPdfUrl, "_blank");
                          }
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      )}
      {/* Pagination */}
      <Pagination
        currentPage={reports?.pagination?.page}
        totalPages={reports?.pagination?.totalPages}
        pageName="reports"
      />
    </div>
  );
};

export default Reports;
