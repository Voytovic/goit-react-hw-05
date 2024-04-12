
import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
export default function NotFound() {
  return (
    <p>
      Page not found.{" "}
      <Link className={css.notFoundLink} to="/">
        Back to Home
      </Link>
    </p>
  );
}
