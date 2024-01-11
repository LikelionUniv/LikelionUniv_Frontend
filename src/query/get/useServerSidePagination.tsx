import { useState, useEffect } from 'react';
import request from '../../utils/request';
import { useSuspenseQuery } from '@tanstack/react-query';
import PaginationComponent from '../../components/utils/pagination/PaginationComponent';

interface IuseServerSidePagination {
    uri: string;
    size: number;
    sort?: string;
    search?: string;
}

interface ResponseServerSidePagination<T> {
    totalPage: number;
    totalElements: number;
    pagingSize: number;
    currentPage: number;
    isFirst: boolean;
    isLast: boolean;
    isEmpty: boolean;
    data: T[];
}

interface ReturnuseServerSidePagination<T> {
    curPageItem: T[];
    renderPaginationBtn: () => JSX.Element;
}

interface Pageable {
    page: number;
    size: number;
    sort?: string;
    search?: string;
}

function useServerSidePagination<T>({
    uri,
    size,
    sort,
    search,
}: IuseServerSidePagination): ReturnuseServerSidePagination<T> {
    const [data, setData] = useState<T[]>([]);
    const [totalElements, setTotalElements] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const fetchPagiableData = async () => {
        const response = await request<
            null,
            ResponseServerSidePagination<T>,
            Pageable
        >({
            uri,
            method: 'get',
            params: {
                page: currentPage,
                size,
                sort,
                search,
            },
        });

        return response.data;
    };

    const { data: cachingData } = useSuspenseQuery({
        queryKey: ['get-pagiable', { uri, size, sort, search, currentPage }],
        queryFn: fetchPagiableData,
    });

    useEffect(() => {
        setData(cachingData.data);
        setTotalElements(cachingData.totalElements);
    }, [cachingData]);

    const setPage = (page: number): void => {
        setCurrentPage(page);
    };

    const renderPaginationBtn = (): JSX.Element => {
        return (
            <PaginationComponent
                page={currentPage}
                size={size}
                count={totalElements}
                pageRange={5}
                setPage={setPage}
            />
        );
    };

    return {
        curPageItem: data,
        renderPaginationBtn,
    };
}

export default useServerSidePagination;
