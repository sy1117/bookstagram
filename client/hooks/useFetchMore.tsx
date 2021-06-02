import { DocumentNode, useQuery } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";

export enum FetchStatus {
  Init,
  Request,
  Loading,
  Idle,
}

const useFetchMore = (query: DocumentNode, offset: number) => {
  const target = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.Init);
  const [itemCount, setItemsCount] = useState<number>(0);
  const { data, fetchMore } = useQuery(query, {
    variables: {
      skip: itemCount,
      take: offset,
    },
    onCompleted(result) {
      if (result.posts.length !== itemCount) {
        setStatus(FetchStatus.Idle);
      }
      setItemsCount(result.posts.length);
    },
    notifyOnNetworkStatusChange: true,
    pollInterval: 1000,
  });

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer,
  ) => {
    if (observer && entry.isIntersecting) {
      setStatus(FetchStatus.Request);
    }
  };

  useEffect(() => {
    if (status === FetchStatus.Idle && target?.current) {
      const observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observer.observe(target.current);
      return () => observer && observer.disconnect();
    }
  }, [status]);

  useEffect(() => {
    if (status == FetchStatus.Request) {
      fetchMore({
        variables: {
          skip: itemCount,
          take: offset,
        },
      });
      setStatus(FetchStatus.Loading);
    }
  }, [status]);
  return {
    status,
    data,
    loading: status === FetchStatus.Idle && <div ref={target}>Loading...</div>,
  };
};

export default useFetchMore;
