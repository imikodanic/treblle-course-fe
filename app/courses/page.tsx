import type { ReactNode } from "react";

import Layout from "./[course]/layout";

export default function Courses() {
    return (
        <div>
            <h1>Courses</h1>
        </div>
    );
}

Courses.getLayout = function getLayout(page: ReactNode) {
    return <Layout>{page}</Layout>;
};
