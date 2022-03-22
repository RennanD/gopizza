import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export type VariantProps = 'primary' | 'secundary';

type ConatinerProps = {
  variant: VariantProps;
};

export const Container = styled(TextInput).attrs<ConatinerProps>(
  ({ theme, variant }) => ({
    placeholderTextColor:
      variant === 'primary'
        ? theme.COLORS.SECONDARY_900
        : theme.COLORS.PRIMARY_50,
  }),
)<ConatinerProps>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;

  ${({ theme, variant }) => css`
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid ${theme.COLORS.SHAPE};
    color: ${variant === 'primary'
      ? theme.COLORS.SECONDARY_900
      : theme.COLORS.TITLE};
  `}
`;
