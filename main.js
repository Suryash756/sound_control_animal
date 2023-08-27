//https://teachablemachine.withgoogle.com/models/KjANG-hRf/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/K004hE6_z/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        {
            random_number_r = Math.floor(Math.random()*255) +1 ;
            random_number_g = Math.floor(Math.random()*255) +1 ;
            random_number_b = Math.floor(Math.random()*255) +1 ;

            document.getElementById("results_label").innaerHTML = 'I can hear -'+ result[0].label;
            document.getElementById("results_confidence").innaerHTML = 'Acuaracy -'+(results[0].confidence*100).toFixed(2)+"%";
            document.getElementById("resultslo9_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

            img =  document.getElementById('sound');
            

            if(results[0].label == "bark"){
                img.src = 'dog.jpg';

            }
            else if(results[0].label == "meow"){
                img.src = 'cat.jgp';
                
            }
            else {
                img.src = 'ear.png';
                
            }
        }
    }
}