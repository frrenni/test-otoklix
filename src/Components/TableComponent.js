import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
  },
  {
    dataField: "content",
    text: "Content",
    sort: true,
  },
  {
    dataField: "published_at",
    text: "Published At",
    sort: true,
  },
  {
    dataField: "created_at",
    text: "Create At",
    sort: true,
  },
  {
    dataField: "updated_at",
    text: "Update At",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="mt-2">
              <FontAwesomeIcon icon={faInfo} />
            </Button>
          </Link>

          <Link to={"edit/" + row.id}>
            <Button color="dark" className="mt-2">
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </Link>

          <Button color="dark" className="mt-2">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

export const TableComponent = (props) => {
  return (
    <Container>
      <div>
        <Row>
          <Col>
            <Link to={"/create"}>
              <Button color="dark" className="mt-2">
                <FontAwesomeIcon icon={faUserPlus} />
                Tambah Data
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={props.data}
        columns={columns}
        defaultSorted={defaultSorted}
      />
    </Container>
  );
};
