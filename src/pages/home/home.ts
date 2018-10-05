import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Platform  } from 'ionic-angular';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  prova: string;
  prova2 = {"name":"", "surname":""};

  constructor(public navCtrl: NavController,
    private file: File,
    public  platform: Platform,
    private storage: Storage
  ) {

  }




  saveStorage(){

    let stringaProva = {"name":"Massimo", "surname":"Rao"};

    this.storage.set('utente1', stringaProva);
    console.log("Nome salvato: " + stringaProva.name);
  }

  loadStorage(){
    //this.storage.set('name', 'Max');
    this.storage.get('utente1').then(
      data => {
        this.prova2 = data;
        console.log("Nome caricato: " + data.name);
      }
    );
  }



  save(){

    //this.file.checkDir(this.file.dataDirectory, 'localDir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesn\'t exist'));

		this.platform.ready().then(() =>{
			if(this.platform.is('android')) {
        console.log("Android Device");
				this.file.checkDir(this.file.externalRootDirectory, 'localDir').then(response => {
          console.log('Directory exists'+response);
          this.prova = 'Directory exists'+response;
				}).catch(err => {
          console.log('Directory doesn\'t exist'+JSON.stringify(err));
          this.prova = 'Directory doesn\'t exist'+JSON.stringify(err);
					this.file.createDir(this.file.externalRootDirectory, 'localDir', false).then(response => {
            console.log('Directory create'+response);
            this.prova = 'Directory create'+response;
					}).catch(err => {
            console.log('Directory no create'+JSON.stringify(err));
            this.prova = 'Directory no create'+JSON.stringify(err);
					}); 
				});
			}
		});
  
  
  console.log("File salvato");
  }

}
