package ch04;

import java.util.Scanner;

public class Year2 {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		
		System.out.println("������ �Է��ϼ���");
		
		int year = scan.nextInt();
		
		if(year % 4 == 0 && year % 100 != 0 || year % 400 ==0) {
			System.out.println(year+"���� �����Դϴ�.");
		}else {
			System.out.println(year+"���� ����Դϴ�.");
		}

	}

}