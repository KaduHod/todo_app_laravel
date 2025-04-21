<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignupPostUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation(): void
    {
        $this->merge([
            'name' => strtolower($this->name),
            'email' => strtolower($this->email),
            // Não modificamos os campos de senha
        ]);
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required",
            "email" => "required|email|unique:users",
            "password" => "required|min:6|max:20|confirmed",
            "password_confirmation" => "required|min:6|max:20",
        ];
    }
}
