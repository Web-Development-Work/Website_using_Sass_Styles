import React from "react";
import { Link } from "react-router-dom";
import Paths from "../../../constants/Paths";

const Cols = [
  {
    Title: "Product",
    Links: [
      {
        Label: "How it works",
        Link: Paths.HowItWorks
      },
      {
        Label: "Pricing",
        Link: Paths.MonthlyPricing
      },
      {
        Label: "Subjects",
        Link: Paths.Subjects
      },
      {
        Label: "Teaching Methods",
        Link: Paths.TeachingMethods
      },
      {
        Label: "Will my child learn?",
        Link: Paths.WMCAL
      },
      {
        Label: "FAQs",
        Link: Paths.FAQs
      }
    ]
  },
  {
    Title: "Company",
    Links: [
      {
        Label: "About us",
        Link: Paths.About
      },
      {
        Label: "Tutors",
        Link: Paths.ATBT
      },
      {
        Label: "Testimonials",
        Link: Paths.Testimonials
      },
      {
        Label: "Contact Us",
        Link: Paths.ContactUs
      }
    ]
  },
  {
    Title: "Resources",
    Links: [
      {
        Label: "Blogs",
        Link: Paths.Blog
      },
      {
        Label: "Privacy Policies",
        Link: Paths.Privacy
      },
      {
        Label: "Terms & Conditions",
        Link: Paths.Terms
      }
    ]
  }
];
const FooterColumns = () => {
  return (
    <section className="Footer-Columns">
      {Cols.map((col, key) => (
        <ul key={key}>
          <li>
            <h3>{col.Title}</h3>
          </li>
          {col.Links.map((l, k) => (
            <li key={k}>
              <Link to={l.Link}>{l.Label}</Link>
            </li>
          ))}
        </ul>
      ))}
    </section>
  );
};

export default FooterColumns;
