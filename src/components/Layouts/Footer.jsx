import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default props => (
  <div className="footer">
    <footer id="section-footer" className="section section-footer">
      <div
        id="zone-footer-wrapper"
        className="zone-wrapper zone-footer-wrapper clearfix"
      >
        <div
          id="zone-footer"
          className="zone zone-footer clearfix container-12"
        >
          <div
            className="grid-12 region region-footer-first"
            id="region-footer-first"
          >
            <div className="region-inner region-footer-first-inner">
              <div
                className="block block-block block-9 block-block-9 odd block-without-title"
                id="block-block-9"
              >
                <div className="block-inner clearfix">
                  <div className="content clearfix">
                    <hr />
                    <p style={{ textAlign: "center", color: "#2d4182" }}>
                      Hagstova Føroya | Kvíggjartún 1 | Postboks 2068 | FO-165
                      Argir | Tlf.: +298-352800 | Fax.: +298-352801 | V-tal:
                      463000 | T-postur:{" "}
                      <a href="mailto:hagstova@hagstova.fo">
                        hagstova@hagstova.fo
                      </a>
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
