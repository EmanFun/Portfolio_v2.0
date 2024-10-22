"use client";
import React from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {
    WrapperError,
    Wrapper,
    ErrorImage,
    ErrorMessage,
    ErrorCode,
    StyledRedirect
} from "./styles";
import ErrorSvg from '/public/svg/alert-error.svg';


interface ErrorComponentProps {
    error: Error,
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({error}) => {
  const t = useTranslations();
  const router = useRouter();
  return (
    <WrapperError>
        <ErrorImage src={ErrorSvg} alt="Error Image" />
        <Wrapper>
            <ErrorMessage>{t(`ErrorApp.message`)}</ErrorMessage>
            <ErrorCode>{t(`ErrorApp.code`)}: {error.message}</ErrorCode>
        </Wrapper>
        <StyledRedirect onClick={()=> router.back()}>{t(`Common.goBack`)}</StyledRedirect>
    </WrapperError>
  );
};

export default ErrorComponent;
