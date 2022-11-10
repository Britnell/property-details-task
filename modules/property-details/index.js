/* eslint-disable max-statements */
import { add, format, sub } from "date-fns";
import React from "react";
import { Button } from "../../components/button";
import RowContainer from "../../components/row-container";
import {
  AccountHeadline,
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  InfoBold,
  InfoText,
  InfoValueHighlight,
  Inset,
} from "./style";

const account = {
  uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
  deleted: false,
  dateCreated: "2020-12-03T08:55:33.421Z",
  currency: "GBP",
  name: "15 Temple Way",
  bankName: "Residential",
  type: "properties",
  subType: "residential",
  originalPurchasePrice: 250000,
  originalPurchasePriceDate: "2017-09-03",
  recentValuation: { amount: 310000, status: "good" },
  associatedMortgages: [
    {
      name: "HSBC Repayment Mortgage",
      uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
      currentBalance: -175000,
    },
  ],
  canBeManaged: false,
  postcode: "BS1 2AA",
  lastUpdate: "2020-12-01T08:55:33.421Z",
  updateAfterDays: 30,
};

const Detail = ({}) => {
  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  // Valuation
  const purchaseDate = new Date(account.originalPurchasePriceDate);
  const sincePurchase =
    account.recentValuation.amount - account.originalPurchasePrice;
  const sincePurchasePercentage =
    (sincePurchase / account.originalPurchasePrice) * 100 + 0.333333;
  const yearsSincePurchase =
    new Date(
      Date.now() - new Date(account.originalPurchasePriceDate)
    ).getFullYear() - 1970;
  const annualAppreciation = sincePurchasePercentage / yearsSincePurchase;

  return (
    <Inset>
      <AccountSection>
        <AccountLabel>Estimated Value</AccountLabel>
        <AccountHeadline>
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(account.recentValuation.amount)}
        </AccountHeadline>
        <AccountList>
          <AccountListItem>
            <InfoText>
              {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>
              {`Next update ${format(
                add(lastUpdate, { days: account.updateAfterDays }),
                "do MMM yyyy"
              )}`}
            </InfoText>
          </AccountListItem>
        </AccountList>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Property details</AccountLabel>
        <RowContainer>
          <AccountList>
            <AccountListItem>
              <InfoText>{account.name}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{account.bankName}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{account.postcode}</InfoText>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Valuation change</AccountLabel>
        <AccountList>
          <AccountListItem>
            <InfoText>
              Purchased for{" "}
              <InfoBold>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(account.originalPurchasePrice)}
              </InfoBold>{" "}
              in {format(purchaseDate, "MMMM yyyy").toString()}
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>since purchase</InfoText>
            <InfoValueHighlight sign={sincePurchase}>
              {`${new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(sincePurchase)}
              (${`${new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 1,
              }).format(sincePurchasePercentage)}%`}) `}
            </InfoValueHighlight>
          </AccountListItem>
          <AccountListItem>
            <InfoText>annual appreciation</InfoText>
            <InfoValueHighlight
              sign={annualAppreciation}
            >{`${new Intl.NumberFormat("en-GB", {
              maximumFractionDigits: 1,
            }).format(annualAppreciation)}%`}</InfoValueHighlight>
          </AccountListItem>
        </AccountList>
      </AccountSection>
      {mortgage && (
        <AccountSection>
          <AccountLabel>Mortgage</AccountLabel>
          <RowContainer
            // This is a dummy action
            onClick={() => alert("You have navigated to the mortgage page")}
          >
            <AccountList>
              <AccountListItem>
                <InfoText>
                  {new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP",
                  }).format(
                    Math.abs(account.associatedMortgages[0].currentBalance)
                  )}
                </InfoText>
              </AccountListItem>
              <AccountListItem>
                <InfoText>{account.associatedMortgages[0].name}</InfoText>
              </AccountListItem>
            </AccountList>
          </RowContainer>
        </AccountSection>
      )}
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
