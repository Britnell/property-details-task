import styled, { css } from "styled-components";

export const AccountList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const AccountLabel = styled.h3`
  font-size: ${(props) => props.theme.typography.xl.fontSize};
  font-weight: normal;
  line-height: ${(props) => props.theme.typography.xl.lineHeight};
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.s};
`;

export const AccountHeadline = styled.div`
  font-size: ${(props) => props.theme.typography["3xl"].fontSize};
  line-height: ${(props) => props.theme.typography["3xl"].lineHeight};
  font-weight: normal;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.m};
`;

export const InfoText = styled.div`
  line-height: 1.6;
  font-size: ${(props) => props.theme.typography.m.fontSize};
  color: ${(props) => props.theme.colors.neutral[600]};
`;

export const InfoBold = styled.strong`
  font-weight: 700;
`;

export const AccountSection = styled.section`
  padding: ${(props) => props.theme.space.m} 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};
  }
}
`;

export const InfoValueHighlight = styled.div`
  font-weight: 700;
  padding: 0.1rem 1rem;
  border-radius: 1rem;
  color: ${(props) =>
    props.sign
      ? props.theme.colors.positive.font
      : props.theme.colors.negative.font};
  background-color: ${(props) =>
    props.sign
      ? props.theme.colors.positive.background
      : props.theme.colors.negative.background};
`;

export const AccountListItem = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.space.m};
  }
`;

export const Inset = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
`;

export const AccountAddress = styled.address``;
