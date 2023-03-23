
let button = document.getElementById('btn');
button.addEventListener('click' ,() => {
    //Deklarasi Variable
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    const describe = document.getElementById('keterangan');
    const text_hasil = document.getElementById('text-hasil');
    const male = document.getElementById('radio-pria');
    const female = document.getElementById('radio-wanita');
    const saran = document.getElementById('saran-hasil');
    const hasil_bmi = document.getElementById('hasil-bmi');
    var saran1 = 'Kamu ada dalam kategori Kekurangan Berat Badan. Untuk mendapatkan berat badan yang ideal sebaiknya kamu mulai memperbanyak asupan kalori dan olahraga fokus pada latihan angkat beban minimal 3x dalam seminggu.';
    var saran2 = 'Kamu ada dalam kategori Berat Badan Ideal. Selalu jaga pola makan dan olahraga rutin supaya berat badan kamu tetap ideal.';
    var saran3 = 'Kamu ada dalam kategori Kelebihan Berat Badan. Untuk menurunkan berat badan kamu perlu mengurangi asupan kalori dan olahraga rutin fokus pada latihan cardio minimal 3x dalam seminggu.';
    var saran4 = 'Gawat kamu ada dalam kategori Obesitas. Sebaiknya kamu mengurangi asupan kalori dan olahraga rutin fokus pada latihan cardio sebaiknya 5-6x dalam seminggu.';
    var hasilbmi1 = 'Hasil BMI kurang dari 18.5';
    var hasilbmi2 = 'Hasil BMI diantara 18.5 dan 24.9';
    var hasilbmi3 = 'Hasil BMI diantara 25 dan 29.9 ';
    var hasilbmi4 = 'Hasil BMI lebih dari 30';

    let height_status=false, weight_status=false, age_status=false , male_status=false, female_status=false; //semua status false
    
    //Validation
    if(!male.checked && !female.checked) //jika radio button male & female tidak dicheck
    {
        document.getElementById('gender_error').innerHTML = 'Mohon pilih jenis kelamin';
    }else{
        document.getElementById('gender_error').innerHTML = '';
        female_status = true, male_status = true;
    }
    if(age == '' || isNaN(age) || (age <= 0)){ //jika age kosong / nilai age bukan angka / nilai age kurang dari 0
        document.getElementById('age_error').innerHTML = 'Mohon cek kembali';
        text_hasil.innerHTML = 'BELUM ADA HASIL';
        describe.innerHTML = '';
        result.innerHTML = '';
        saran.innerHTML = '';
        hasil_bmi.innerHTML = '';
    }else{
        document.getElementById('age_error').innerHTML = '';
        age_status = true;
    }

    if(weight == '' || isNaN(weight) || (weight <= 0)) //jika weight kosong / nilai weight bukan angka / nilai weight kurang dari 0
    {
        document.getElementById('weight_error').innerHTML = 'Mohon cek kembali';
        text_hasil.innerHTML = 'BELUM ADA HASIL';
        describe.innerHTML = '';
        result.innerHTML = '';
        saran.innerHTML = '';
        hasil_bmi.innerHTML = '';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if(height == '' || isNaN(height) || (height <= 0)) //jika height kosong / nilai height bukan angka / nilai height kurang dari 0
    {
        document.getElementById('height_error').innerHTML = 'Mohon cek kembali';
        text_hasil.innerHTML = 'BELUM ADA HASIL';
        describe.innerHTML = '';
        result.innerHTML = '';
        saran.innerHTML = '';
        hasil_bmi.innerHTML = '';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }
    /* CALCULATE */
    if(age_status && weight_status && height_status && male_status && female_status ) //jika age & weight & height & male & female status = true
    {
    const bmi = (weight / ((height*height)/10000)).toFixed(1); //Rumus BMI = Berat / Tinggi * Tinggi / 10000 (dari Meter ke CM)
    /* HASIL CALCULATE */
    if (bmi < 18.5){
        result.innerHTML = 'Nilai BMI : '+ bmi;
        describe.innerHTML = 'Kamu Kekurangan Berat Badan';
        text_hasil.innerHTML = 'HASIL';
        saran.innerHTML = saran1;
        hasil_bmi.innerHTML = hasilbmi1;

    }else if(bmi >= 18.5 && bmi < 24.9){
        result.innerHTML = 'Nilai BMI : '+ bmi;
        describe.innerHTML = 'Berat Badan Kamu Ideal';
        text_hasil.innerHTML = 'HASIL';
        saran.innerHTML = saran2;
        hasil_bmi.innerHTML = hasilbmi2;

    }else if(bmi >=25 && bmi < 29.9){
        result.innerHTML = 'Nilai BMI : '+ bmi;
        describe.innerHTML = 'Kamu Kelebihan Berat Badan';
        text_hasil.innerHTML = 'HASIL';
        saran.innerHTML = saran3;
        hasil_bmi.innerHTML = hasilbmi3;

    }else{
        result.innerHTML = 'Nilai BMI : '+ bmi;
        describe.innerHTML = 'Kamu Termasuk Dalam Kategori Obesitas';
        text_hasil.innerHTML = 'HASIL';
        saran.innerHTML = saran4;
        hasil_bmi.innerHTML = hasilbmi4;

    }
    }
    /*RESET BUTTON*/
    if (document.getElementById('btn-reset').onclick = function() //jika tombol reset di click
    {
        describe.innerHTML ='';
        result.innerHTML ='';
        text_hasil.innerHTML ='BELUM ADA HASIL';
        document.getElementById('age_error').innerHTML = ''; //menghilangkan text 
        document.getElementById('weight_error').innerHTML = '';
        document.getElementById('height_error').innerHTML = '';
        document.getElementById('gender_error').innerHTML = '';
        saran.innerHTML = '';
        hasil_bmi.innerHTML = '';
    });
});