import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import useLksService from "../assests/api";

const PostCard = ({
  slug,
  created_at,
  title,
  readMore,
  image_preview,
  content,
}) => {
  const { t } = useTranslation();
  const { _apiPictures } = useLksService();
  return (
    <div className="col-4 post" key={created_at}>
      <div className="lks-card post-card ">
        <div className="post-info">
          <ul>
            <Link
              to={`/posts/${slug}`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <li>
                <div className="post-date">{created_at}</div>
                <div className="post-image">
                  {/* <img src={`${_apiPictures}${image_preview}`} alt="img post" /> */}
                  <img
                    src="https://via.placeholder.com/180x200/300"
                    alt="placeholder"
                  />
                </div>
                <div className="post-caption">{title}</div>

                <article
                  className="post-text"
                  // dangerouslySetInnerHTML={{
                  //   __html: content,
                  // }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi sint fugit impedit ut dicta labore, praesentium
                  doloribus, vitae quae aut dolorum aspernatur quaerat
                  distinctio sit sunt. Laboriosam, quae! Accusamus, minus!
                </article>
                <div className={readMore}>
                  <button className="lks-btn lks-btn-main"> {t("Read")}</button>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(PostCard);
