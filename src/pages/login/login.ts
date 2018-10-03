import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../../pages/home/home';
import { MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loginError;
  
  


  credentials: any = {"email":"", "password":""};

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     public fb: FormBuilder,
     private auth: AuthServiceProvider,
     public menu: MenuController,
     private splashScreen: SplashScreen
    ) {
      splashScreen.hide();
      this.loginErrorReset();

      this.menu.enable(false);

		this.loginForm = this.fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  logIn(){
    this.loginErrorReset();

    let data = this.loginForm.value;
    
    if (!data.email) {
			return;
    }

		let credentials = {
			email: data.email,
			password: data.password
		};

		this.auth.signInWithEmail(credentials)
			.then(
				() => {this.menu.enable(true); this.navCtrl.setRoot(HomePage);   console.log("User " + data.email + " logged In.");},
				error => {
          if(error.message.includes('network error')){
            this.loginError.emailError = "Errore di connessione.";
          }
          else if(error.message.includes('badly formatted')){
            this.loginError.emailError = "Email non valida";
          }
          else if(error.message.includes('no user record')){
            this.loginError.emailError = "Utente inesistente";
          }
          else if(error.message.includes('password is invalid')){
            this.loginError.passwordError = "Password errata";
          }
             
          console.log("User " + data.email + " Error LogIn: " + error.message);}
			);

  
  }



  loginErrorReset(){
   this.loginError = {
      "emailError" : "",
      "passwordError" : ""
    };
  }

}