import React, { useState } from "react";
import TestContext from "./TestContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import TestReports from "./components/Admin/TestReports";
import Dashboard from "./components/Admin/Dashboard";
import StudentLogin from "./components/Student/StudentLogin";
import Assessment from "./components/Admin/Assessment";
import NotFound from "./components/Admin/NotFound";
import AllTests from "./components/Student/StudentTests/AllTests";

const App = () => {
  const [reports, setReports] = useState([]);
  const [currentTest, setCurrentTest] = useState("");

  const addToReports = (item) => {
    setReports(item);
  };
  const addCurrentTest = (studentTest) => {
    setCurrentTest(studentTest);
  };

  return (
    <TestContext.Provider
      value={{ addCurrentTest, currentTest, reports, addToReports }}
    >
      <BrowserRouter>
        <Routes>
          {/* admin components */}
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/testReports" element={<TestReports />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sendAssessments" element={<Assessment />} />
          {/* student components */}
          <Route path="/studentLogin" element={<StudentLogin />} />
          <Route path="test" element={<AllTests />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TestContext.Provider>
  );
};

export default App;
