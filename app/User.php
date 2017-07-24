<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    protected $appends = array('last_name');
    /**
     * Palabras: claves
     * get
     * Attribute
     * @return void
     */
    public function getFullNameAttribute(){
        return $this->name . ' ' . $this->f_last_name . ' ' . $this->m_last_name;
    }
    public function getLastNameAttribute(){
        return $this->f_last_name . ' ' . $this->m_last_name;
    }
}
