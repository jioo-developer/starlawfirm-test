import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Notice from "@/app/pages/components/Notice";
import axios from "axios";
import { NoticeData } from "@/app/mocks/handlers";
import { useInView } from "react-intersection-observer";

// Axios Mocking
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn(),
}));

(useInView as jest.Mock).mockReturnValue({
  ref: jest.fn(),
  inView: true, // 뷰포트 안에 있는 상태를 시뮬레이션
});

jest.mock("@/app/store/common", () => ({
  useMswReady: jest.fn(() => ({ loading: true })), // Mock 반환값 설정
}));

describe("Notice 페이지 소식 api 요청 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
    render(<Notice />);
  });

  test("API 요청 성공 시 게시글이 올바르게 랜더링 되는 지 테스트", async () => {
    const mockResponse = {
      data: {
        data: NoticeData.slice(0, 5),
      },
    };
    mockedAxios.get.mockResolvedValue(mockResponse); // 성공적인 응답 설정

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith("/NoticeData", {
        params: { params: 1 },
      });
    });

    const firstPost = screen.getByText(
      "토스, ‘머니북’ 수익금 3억 원 금융소외층에 기부"
    );
    const secondPost = screen.getByText(
      "토스 유튜브 채널 '머니그라피', 팝업 이벤트 개최"
    );

    expect(firstPost).toBeInTheDocument();
    expect(secondPost).toBeInTheDocument();
  });
  test("API 요청 실패시 재시도 버튼 랜더링 및 재 작동 테스트", async () => {
    window.alert = jest.fn();
    mockedAxios.get.mockRejectedValue(new Error("API 요청 실패"));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "데이터를 가져오지 못했습니다."
      );
    });
    const buttonElement = screen.getByRole("button", {
      name: "소식이 안뜰 때 클릭",
    });
    expect(buttonElement).toBeInTheDocument();

    const firstPost = screen.queryByText(
      "토스, ‘머니북’ 수익금 3억 원 금융소외층에 기부"
    );
    const secondPost = screen.queryByText(
      "토스 유튜브 채널 '머니그라피', 팝업 이벤트 개최"
    );

    expect(firstPost).not.toBeInTheDocument();
    expect(secondPost).not.toBeInTheDocument();

    const firstButton = screen.getByText("소식이 안뜰 때 클릭");

    fireEvent.click(firstButton);

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(2);
      expect(mockedAxios.get).toHaveBeenCalledWith("/NoticeData", {
        params: { params: 1 },
      });
    });
  });
  test("page 번호 1번 누르면 첫번째 페이지 게시글 호출 테스트", async () => {
    const mockResponse = {
      data: {
        data: NoticeData.slice(0, 5),
      },
    };
    mockedAxios.get.mockResolvedValue(mockResponse); // 성공적인 응답 설정

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith("/NoticeData", {
        params: { params: 1 },
      });
    });

    const firstButton = screen.getByText(1);
    fireEvent.click(firstButton);

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith("/NoticeData", {
        params: { params: 1 },
      });
    });
  });
  test("page 번호 2번 누르면 두두번째 페이지 게시글 호출 테스트", async () => {
    const mockResponse = {
      data: {
        data: NoticeData.slice(5, NoticeData.length),
      },
    };
    mockedAxios.get.mockResolvedValue(mockResponse); // 성공적인 응답 설정

    const firstButton = screen.getByText(2);
    fireEvent.click(firstButton);

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith("/NoticeData", {
        params: { params: 2 },
      });
    });

    const firstPost = screen.getByText(
      "토스, 안면인식 출국 서비스 ‘스마트패스’ 오픈"
    );
    const secondPost = screen.getByText(
      "토스, 데이터보호 준법 자문위원회 출범 2주년"
    );

    expect(firstPost).toBeInTheDocument();
    expect(secondPost).toBeInTheDocument();
  });
});
