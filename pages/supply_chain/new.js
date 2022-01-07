import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Input, Message, Button } from "semantic-ui-react";
import supplyChainFactoryInstance from "./../../ethereum/supplyChainFactoryInstance";
import { Router } from "./../../routes";

class SupplyChainNew extends React.Component {
  state = {
    supplyChainTitle: "",
    errorMessage: "",
    successMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    if (window.ethereum) {
      //open metamask and assign to metamask connected account
      const connected_account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(connected_account);
      try {
        this.setState({ loading: true, errorMessage: "" });

        await supplyChainFactoryInstance.methods
          .createSupplyChain(this.state.supplyChainTitle)
          .send({
            from: connected_account[0],
            chainId: 3,
          });
        console.log(this.state.successMessage);
        this.setState({
          successMessage: "Creating new supply chain is succeed",
        });
        //Router.pushRoute("/");
      } catch (err) {
        console.log(err.message);
        this.setState({ errorMessage: err.message });
      }
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Layout>
        <h3>Create a Supply Chain</h3>
        <Form
          onSubmit={this.onSubmit}
          error={!!this.state.errorMessage}
          success={!!this.state.successMessage}
        >
          <Form.Field>
            <label>Supply Chain Title</label>
            <Input
              label="Title"
              labelPosition="right"
              value={this.state.supplyChainTitle}
              onChange={(event) =>
                this.setState({ supplyChainTitle: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Error" content={this.state.errorMessage} />
          <Message
            success
            header="Success"
            content={this.state.successMessage}
          />
          <Button loading={this.state.loading} primary>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default SupplyChainNew;
