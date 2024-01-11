package com.sjinc.bss.project.commonmodule.systemconfig;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
public class BoardPaging  {
    @Setter @Getter
    private final int totalCount; // 전체 데이터 갯수
    @Setter @Getter
    private final int pageNum; // 현재 페이지 번호
    @Setter @Getter
    private final int contentNum; // 페이지 당 글 수
    @Setter @Getter
    private final int blockNum; // 게시판 페이지 수

    @Getter
    private int startPage; // 보여지는 시작 페이지
    @Getter
    private int endPage; // 보여지는 종료 페이지
    @Getter
    private boolean prev; // 이전 페이지 이동가능여부
    @Getter
    private boolean next; //  다음 페이지 이동가능여부
    @Getter
    private int currentBlock; // 현재 페이지 블록
    private int lastBlock; //  마지막 페이지 블록
    private int lastPage; //  마지막 페이지 블록

    public BoardPaging(int totalCount, int pageNum, int contentNum, int blockNum){
        this.totalCount = totalCount;
        this.pageNum = pageNum; //현재 페이지를 페이지 객체에 지정한다.
        this.contentNum = contentNum;
        this.blockNum = blockNum;

        setCurrentblock(); // 현재 페이지 블록이 몇번인지 현재 페이지 번호를 통해서 지정한다.
        setLastblock(); // 마지막 블록 번호를 전체 게시글 수를 통해서 정한다.
        setPrevNext();
        setStartPage();
        setEndPage();
    }

    public void setPrevNext(){
        if(calcTotalPage() <= blockNum){
            this.prev = false;
            this.next = false;
        }else if(pageNum > 0 && pageNum <= blockNum){
            this.prev = false;
            this.next = true;
        }else if(lastBlock == currentBlock){
            this.prev = true;
            this.next = false;
        }else{
            this.prev = true;
            this.next = true;
        }
    }
    public int calcTotalPage(){
        int totalpage = totalCount / contentNum;
        if(totalCount % contentNum > 0){
            totalpage++;
        }
        return totalpage;
    }

    public void setStartPage() {
        this.startPage = (currentBlock-1)*blockNum +1;
        /*
         *  block 1
         *  1  // 0 1
         *  2  // 2 3
         *  3  // 4 5
         *  4  // 6 7
         *  5  // 8 9
         *  block 2
         *  6  // 10
         * */
     }

    public void setEndPage() {
        if(lastBlock == currentBlock){
            this.endPage = calcTotalPage();
        }else{
            this.endPage = getStartPage() + (blockNum-1);
        }
    }

    public void setCurrentblock() {
        this.currentBlock = pageNum / blockNum;
        if(pageNum % blockNum > 0){
            this.currentBlock++;
        }
    }

    public void setLastblock() {
        this.lastBlock = totalCount / (blockNum * contentNum);
        if(totalCount % (blockNum * contentNum)>0){
            this.lastBlock++;
        }
    }
}