import React, { useContext } from "react";
import { Row, Col } from "antd";
import { ManageContext } from "./ManageAccount";

export default function DetailAccount() {
  const { step, dispatch } = useContext(ManageContext);

  return (
    <Row>
      <Row id="bankName">
        <Row>
          <Col>
            <label>은행</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>arst</span>
          </Col>
        </Row>
      </Row>
      <Row id="newAccountNum">
        <Col>
          <Row>
            <Col>
              <label>계좌번호</label>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                title="bank"
                onChange={e => {
                  dispatch({ type: "CURRENT_ACCOUNTS" });
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row id="ownerName">
        <Col>
          <Row>
            <Col>
              <label>예금주</label>
            </Col>
          </Row>
          <Row>
            <Col>
              <input title="ownerName" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <button
            onClick={() => {
              // setManageStep(0);
            }}
          >
            입력완료
          </button>
        </Col>
      </Row>
    </Row>
  );
}
