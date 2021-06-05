import { DocumentNode, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { GetCommentsDocument } from "../apollo/__generated__/models";

export enum FetchStatus {
  Init,
  Request,
  Loading,
  Idle,
}

const useFetchComments = ({
  postId,
  skip,
  take,
}: {
  postId: number;
  skip: number;
  take: number;
}) => {
  const target = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.Idle);
  const [itemCount, setItemsCount] = useState<number>(skip);

  const { data, refetch } = useQuery(GetCommentsDocument, {
    variables: {
      postId,
      skip,
      take,
    },
    onCompleted(result) {
      if (result.comments.length !== itemCount) {
        setStatus(FetchStatus.Idle);
      }
      setItemsCount(result.comments.length);
    },
    onError() {
      console.log("error");
    },
    notifyOnNetworkStatusChange: true,
    pollInterval: 1000,
  });

  return {
    status,
    data,
    loading: status === FetchStatus.Idle && <div ref={target}>Loading...</div>,
    refetch,
  };
};

export default useFetchComments;
