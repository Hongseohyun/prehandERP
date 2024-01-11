package com.sjinc.bss.framework.utils.excel;

import com.sjinc.bss.framework.FrameFileUtil;
import org.apache.commons.collections4.map.HashedMap;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.IntStream;

public class ExcelUtil {

    private ExcelUtil() {
        super();
    }

    /*public static List<Map<String, Object>> getList(File excelFile) throws Exception {
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();

        OPCPackage pkg = null;
        Sheet sheet = null;

//        String fileName = excelFile.getName();
//        String fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
        pkg = OPCPackage.open(excelFile);
        sheet = new XSSFWorkbook(pkg).getSheetAt(0);

        List<Map<String, Object>> colNameList = new ArrayList<Map<String, Object>>();

        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

        if (sheet != null) {
            for (Row row : sheet) {

                String cellValue = "";

                if (row.getRowNum() == 0) {
                    for (Cell cell : row) {

//                        switch (cell.getCellType()) {
//                            case STRING:
//                                cellValue = cell.getRichStringCellValue().toString();
//                                break;
//                            case NUMERIC:
//                                if (DateUtil.isCellDateFormatted(cell)) {
//                                    cellValue = format.format(cell.getDateCellValue());
//                                } else {
//                                    cellValue = String.format("%.0f", cell.getNumericCellValue());
//                                    
//                                }
//                                break;
//                            default:
//                                cellValue = "";
//                        }

                        Map<String, Object> colNameData = new HashedMap();
                        colNameData.put("COLUMN_INDEX", cell.getColumnIndex());
                        colNameData.put("COLUMN_NAME", cell.getStringCellValue());
                        colNameList.add(colNameData);
                    }

                    continue;
                }

                boolean isValidRow = false;

                Map<String, Object> rowData = new HashedMap();

                for (int cellIdx = 0; cellIdx < colNameList.size(); cellIdx++) {
                    Cell cell = row.getCell(cellIdx);

                    if (cell != null) {
                        switch (cell.getCellType()) {
                            case STRING:
                                cellValue = cell.getRichStringCellValue().toString();
                                break;
                            case NUMERIC:
                                if (org.apache.poi.ss.usermodel.DateUtil.isCellDateFormatted(cell)) {
                                    cellValue = format.format(cell.getDateCellValue());
                                } else {
                                    //cellValue = String.format("%f", cell.getNumericCellValue());
                                    cellValue = Double.toString(cell.getNumericCellValue());
                                }

                                break;
                            default:
                                cellValue = "";
                        }

                        if (!"".equals(cellValue)) {
                            isValidRow = true;
                        }

                        for (int i = 0; i < colNameList.size(); i++) {
                            Map<String, Object> colNameData = colNameList.get(i);

                            if (cell.getColumnIndex() == (int) colNameData.get("COLUMN_INDEX")) {
                                rowData.put(colNameData.get("COLUMN_NAME").toString(), cellValue);
                            }
                        }

                    } else {
                        for (int i = 0; i < colNameList.size(); i++) {
                            Map<String, Object> colNameData = colNameList.get(i);

                            if (cellIdx == (int) colNameData.get("COLUMN_INDEX")) {
                                rowData.put(colNameData.get("COLUMN_NAME").toString(), "");
                            }
                        }
                    }
                }

                if (isValidRow) {
                    list.add(rowData);
                }
            }
        }

        if (pkg != null) {
            //리눅스 서버 배포 시 권한 거부(Permission Denied) IOException 발생하는 경우 서버 설정에서 
            //-Djava.io.tmpdir=/프로젝트경로/upload 옵션을 추가 해 줄것
            pkg.close();
        }

        return list;
    }*/
    public static List<Map<String,Object>> getList(List<String> colNames, MultipartFile excelFile){
        List<Map<String,Object>> list = new ArrayList<>();
        try {
            String fileName = excelFile.getOriginalFilename();
            String extension = FrameFileUtil.getFileExt(fileName);

            if(extension.equals("xls")){ //확장자에 따라 다른 객체 필요
                HSSFWorkbook workbook = new HSSFWorkbook(excelFile.getInputStream());
                HSSFSheet sheet = workbook.getSheetAt(0); // 첫번째 시트 불러오기

                for(int i=1; i<sheet.getLastRowNum() + 1; i++) {
                    HashMap<String,Object> item = new HashMap<String,Object>();
                    HSSFRow row = sheet.getRow(i);

                    // 행이 존재하기 않으면 패스
                    if(null == row) {
                        continue;
                    }

                    IntStream.range(0,colNames.size()).forEach(idx -> {
                        HSSFCell cell = row.getCell(idx);
                        if(null != cell)
                            item.put(colNames.get(idx), getCellValueToString(cell));
                    });

                    list.add(item);
                }
            }else if(extension.equals("xlsx")){
                OPCPackage opcPackage = OPCPackage.open(excelFile.getInputStream());
                XSSFWorkbook workbook = new XSSFWorkbook(opcPackage);
                XSSFSheet sheet = workbook.getSheetAt(0); // 첫번째 시트 불러오기

                for(int i=1; i<sheet.getLastRowNum() + 1; i++) {
                    HashMap<String,Object> item = new HashMap<String,Object>();
                    XSSFRow row = sheet.getRow(i);

                    // 행이 존재하기 않으면 패스
                    if(null == row) {
                        continue;
                    }

                    IntStream.range(0,colNames.size()).forEach(idx -> {
                        XSSFCell cell = row.getCell(idx);
                        if(null != cell)
                            item.put(colNames.get(idx), getCellValueToString(cell));
                    });

                    list.add(item);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    /**
     * Cell의 값을 String 형태로 반환
     * @param cell
     * @return
     */
    public static String getCellValueToString(XSSFCell cell){
        String value = "";

        if (cell.getCellType() == CellType.FORMULA){
            value = cell.getCellFormula();
        }else if(cell.getCellType() == CellType.NUMERIC){
            double cellValue = cell.getNumericCellValue();
            if (cellValue == Math.rint(cellValue)) {
                value = String.valueOf((int) cellValue);
            } else {
                value = String.valueOf(cellValue);
            }
        }else if(cell.getCellType() == CellType.STRING){
            value = String.valueOf(cell.getStringCellValue());
        }else if(cell.getCellType() == CellType.BOOLEAN){
            value = cell.getBooleanCellValue() + "";
        }else if(cell.getCellType() == CellType.ERROR){
            value = String.valueOf(cell.getErrorCellValue());
        }
        return value;
    }

    public static String getCellValueToString(HSSFCell cell){
        String value = "";

        if (cell.getCellType() == CellType.FORMULA){
            value = cell.getCellFormula();
        }else if(cell.getCellType() == CellType.NUMERIC){
            double cellValue = cell.getNumericCellValue();
            if (cellValue == Math.rint(cellValue)) {
                value = String.valueOf((int) cellValue);
            } else {
                value = String.valueOf(cellValue);
            }
        }else if(cell.getCellType() == CellType.STRING){
            value = String.valueOf(cell.getStringCellValue());
        }else if(cell.getCellType() == CellType.BOOLEAN){
            value = cell.getBooleanCellValue() + "";
        }else if(cell.getCellType() == CellType.ERROR){
            value = String.valueOf(cell.getErrorCellValue());
        }
        return value;
    }
}
