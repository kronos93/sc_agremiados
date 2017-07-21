@if (Auth::check())
    {{ Auth::user()->full_name }}
@endif