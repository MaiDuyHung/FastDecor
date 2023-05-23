// VALIATE CHO PHAN LIEN HE

function validateLienHe() {
    let N = document.GetIn4Submit.fHoten.value;
    
    // PhoneValidator
    let P = document.GetIn4Submit.fSdt.value;
    var phoneFormat = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    // mailValidator
    let E = document.GetIn4Submit.fEmail.value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(N.length >= 9 ){
        if(P.match(phoneFormat)){
            if(E.match(mailFormat)){
                alert("Thông tin của bạn đã được lưu. Cảm ơn quý khách đã phản hồi");
                return true;
            }else{
                alert("Email không đúng định dạng");
                return false;
            }
        }else{
            alert("Số điện thoại không hợp lệ");
            return false;
        }
    }else{
        alert("Tên không hợp lệ");
        return false;
    }
}

/*Validate email cho phan footer*/ 
function ValidateFooter(){
    let EF = document.EmailIP.fEmailFooter.value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(EF.match(mailFormat)){
        alert("Cảm ơn bạn đã quan tâm tới FastDecor, chúng tôi sẽ gửi tin sớm nhất đến cho bạn");
        return true;
    }
    else{
        alert("Địa chỉ email không hợp lệ!");
        return false;
    }
}
function dieu_huong(){
    window.location.replace("http://127.0.0.1:5502/index.html");
}

/*VALIDATE CHO DANG NHAP*/ 

function ValidateDN(){
    let EDN = document.formDangnhap.email.value;
    let PhoneDN = document.formDangnhap.email.value;
    let TenDN = document.formDangnhap.email.value;
//  tao format cho cac kieu field maf nguoi dung nhap vao
    var EDNFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var PhoneDNFormat = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    var TenFormat = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/;

    let Pass = document.formDangnhap.password.value;
    
    if(EDN != ""){
        if(EDN.match(EDNFormat)){
            if(Pass.length >=9){
                alert("Đăng nhập thành công");
                dieu_huong();
                return true;
            }
            else{
                document.getElementById("warningPassDN").innerText="(*)Mật khẩu không hợp lệ!";
                document.getElementById("warningPassDN").style.display = "block";
                return false;
            }
        }else{
            if(PhoneDN.match(PhoneDNFormat)){
                if(Pass.length >=9){
                    alert("Đăng nhập thành công");
                    return true;
                }
                else{
                    document.getElementById("warningPassDN").innerText="(*)Mật khẩu không hợp lệ!";
                    document.getElementById("warningPassDN").style.display = "block";
                    return false;
                }
            }else{
                if(TenDN.match(TenFormat)){
                    if(Pass.length >=9){
                        alert("Đăng nhập thành công");
                        return true;
                    }
                    else{
                        
                        document.getElementById("warningPassDN").innerText="(*)Mật khẩu không hợp lệ!";
                        document.getElementById("warningPassDN").style.display = "block";
                        
                        return false;
                    }
                }else{
                    alert("Thông tin đăng nhập không hợp lệ");
                    document.getElementById("warningEmailDN").innerText="(*)Thông tin đăng nhập không hợp lệ!";
                    return false;
                }
            }
        }
    }else{
        document.getElementById("warningEmailDN").innerText="(*)Vui lòng nhập vào thông tin đăng nhập!";
        if(Pass.length >=9){
            document.getElementById("warningPassDN").style.display = "none";
            return false;
        }
        else{
            document.getElementById("warningPassDN").innerText="(*)Mật khẩu không hợp lệ!";
            document.getElementById("warningPassDN").style.display = "block";
            return false;
        }
    }


}

//Validate form Dang Ki
function ValidateDangKy(){
    let EDK = document.formDangKi.EmailDK.value;
    let PhoneDK = document.formDangKi.EmailDK.value;
    let TenDK = document.formDangKi.EmailDK.value;

    let Pass1 = document.formDangKi.pass1.value;
    let Pass2 = document.formDangKi.pass2.value;
//  tao format cho cac kieu field maf nguoi dung nhap vao
    var EDKFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var PhoneDKFormat = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    var TenDKFormat = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/;
    if(EDK != ""){
        if(EDK.match(EDKFormat)){
            if(Pass1.length >= 9 ){
                if(Pass2 == Pass1){
                    alert("Đăng kí thành công");
                    return true;
                }else{
                    document.getElementById("warnPass2").innerText="(*)Mật khẩu nhập lại không trùng khớp!";
                    alert("Mật khẩu nhập lại không trùng khớp!");
                    return false;
                }
            }else{
                document.getElementById("warnPass1").innerText="(*)Mật khẩu phải có tối thiểu 9 kí tự!";
                alert("Mật khẩu phải có tối thiểu 9 kí tự!");
                return false;
            }
        }else{
            if(PhoneDK.match(PhoneDKFormat)){
                if(Pass1.length >= 9 ){
                    if(Pass2 == Pass1){
                        alert("Đăng kí thành công");
                        return true;
                    }else{
                        document.getElementById("warnPass2").innerText="(*)Mật khẩu nhập lại không trùng khớp!";
                        alert("Mật khẩu nhập lại không trùng khớp!");
                        return false;
                    }
                }else{
                    document.getElementById("warnPass1").innerText="(*)Mật khẩu phải có tối thiểu 9 kí tự!";
                    alert("Mật khẩu phải có tối thiểu 9 kí tự!");
                    return false;
                }
                  
            }else{
                if(TenDK.match(TenDKFormat)){   
                    if(Pass1.length >= 9 ){
                        if(Pass2 == Pass1){
                            alert("Đăng kí thành công");
                            return true;
                        }else{
                            document.getElementById("warnPass2").innerText="(*)Mật khẩu nhập lại không trùng khớp!";
                            alert("Mật khẩu nhập lại không trùng khớp!");
                            return false;
                        }
                    }else{
                        document.getElementById("warnPass1").innerText="(*)Mật khẩu phải có tối thiểu 9 kí tự!";
                        alert("Mật khẩu phải có tối thiểu 9 kí tự!");
                        return false;
                    }
                }else{
                    alert("Quý khách vui lòng kiểm tra lại tên đăng ký, email hoặc số điện thoại")
                    document.getElementById("warningDK").innerText="(*)Thông tin đăng ký không hợp lệ!";
                    return false;
                }
            }
        }
    }else{
        document.getElementById("warningDK").innerText="(*)Vui lòng điền vào thông tin đăng ký!";
        if(Pass1 == ""){
            document.getElementById("warnPass1").innerText="(*)Vui lòng nhập mật khẩu!";

        }else{
            if(Pass1 == Pass2){
                return false;
            }
            else{
                document.getElementById("warnPass2").innerText="(*)Mật khẩu nhập lại không trùng khớp!";
                return false;
            }
        }
        return false;
    }
}
