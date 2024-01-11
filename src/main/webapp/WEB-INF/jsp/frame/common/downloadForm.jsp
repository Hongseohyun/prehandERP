<%@page import="com.sjinc.bss.framework.FrameStringUtil"%>
<%@page import="java.net.URLEncoder"%>
<%@page contentType="text/html;charset=utf-8"%>
<%@page import = "java.io.*"%>
<%
	//응답 헤더의 Content-Type을 세팅한다. 
	response.setContentType("application/x-msdownload");

	request.setCharacterEncoding("utf-8");
	String PGMID = FrameStringUtil.isNullDefaultValue(request.getParameter("PGMID"), "");

	//System.out.println("PGMID"+PGMID);
	ServletContext context = request.getServletContext(); // 서블릿 컨텍스트 얻기
	String errorMsg = null;
	String realPath = application.getRealPath("excelForm");

	String fileName = PGMID + ".xls";

	try {
		File file = new File(realPath + File.separator + fileName);
		if (!file.isFile()) {
			fileName = PGMID + ".xlsx";
			file = 	new File(realPath + File.separator + fileName);
		}
		
		byte b[] = new byte[4096];

		response.reset();

		response.setHeader("Content-Disposition", "attachment;filename=" + fileName + ";");

		if (file.isFile()) {
			out.clear();
			BufferedInputStream fin = new BufferedInputStream(new FileInputStream(file));
			BufferedOutputStream outs = new BufferedOutputStream(response.getOutputStream());

			int read = 0;

			while ((read = fin.read(b)) != -1) {
				outs.write(b, 0, read);
			}
			outs.close();
			fin.close();

			//  boolean result = deleteAll(drmFile);        // 생성된 암호화파일 삭제
		} else {
			errorMsg = "파일이 존재하지 않습니다.!!";
			throw new Exception("파일이 존재하지 않습니다.!!:" + realPath + File.separator + fileName);
		}

	} catch (Exception ex) {
		errorMsg = ex.getMessage();
		throw new Exception(errorMsg);
	} finally {

		//생성된 파일 삭제
		//boolean result = deleteAll(drmFile);
	}
%><%!//파일 삭제
	public boolean deleteAll(String filepath) {
		File[] dirFileList = null;
		int loopCount = 0;
		File dirFile = new File(filepath);

		if (dirFile.isDirectory() == true) {
			dirFileList = dirFile.listFiles();
			if (dirFileList.length == 0) {
				return true;
			}

			for (loopCount = 0; loopCount < dirFileList.length; loopCount++) {
				if (dirFileList[loopCount].isDirectory() == false && dirFileList[loopCount].delete() == false) {
					return false;
				}
			}
			return true;
		}

		return dirFile.delete();
	}%>